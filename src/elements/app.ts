import hotkeys from 'hotkeys-js';
import { css, CSSResult, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { getLaunchImage } from '../helpers/file-handling-api';
import { menus } from '../menus/all';
import type { MenuEntry, MenuSeparator } from '../models/menu';

const defaultHelpText = 'For Help, click Help Topics on the Help Menu.';

@customElement('paint-app')
export class App extends LitElement {
  @property({ attribute: false }) areaText = '';
  @property({ attribute: false }) coordinateText = '';
  @property({ attribute: false }) helpText = defaultHelpText;
  @property({ attribute: false }) drawingContext = DRAWING_CONTEXT;

  static get styles(): CSSResult {
    return css`
      :host {
        --button-face: rgb(192 192 192);
        --button-light: white;
        --button-dark: rgb(128 128 128);
        --button-darker: black;
        --button-text: black;
        --canvas: rgb(128 128 128);
        --disabled-text: rgb(128 128 128);
        --highlight: rgb(0 0 128);
        --highlight-text: white;
        --highlight-disabled-text: rgb(128 128 128);
        --disabled-text-backdrop: white;
        --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWP4f4DhwH8ACoADf16N/DIAAAAASUVORK5CYII=');

        --z-index-menu: 10;
        --z-index-dialog: 20;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
        font-size: 9pt;

        display: inline-flex;
        flex-direction: column;
        background-color: var(--canvas);
        color: var(--button-text);

        user-select: none;
        -webkit-user-select: none;
        cursor: default;

        -webkit-tap-highlight-color: transparent;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --button-face: rgb(64 64 64);
          --button-light: rgb(128 128 128);
          --button-dark: rgb(32 32 32);
          --button-text: white;
          --canvas: rgb(32 32 32);
          --disabled-text: rgb(64 64 64);
          --highlight: rgb(0 0 128);
          --highlight-text: white;
          --highlight-disabled-text: rgb(128 128 128);
          --disabled-text-backdrop: rgb(192 192 192);
          --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWNocGBwaAAABIYBga3c92oAAAAASUVORK5CYII=');
        }
      }

      @media print {
        * {
          display: none;
        }

        paint-canvas {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }

      div {
        overflow: hidden;
        flex: 1;
        display: flex;
      }

      div > paint-canvas {
        flex: 1;
      }

      div > paint-tool-bar {
        width: 57px;
        min-width: 57px;
      }

      paint-tool-bar {
        display: flex;
        flex-direction: column;
      }

      paint-tool-bar.color-box {
        height: 49px;
        justify-content: space-between;
      }

      paint-tool-bar.color-box paint-color-box {
        margin-top: 7px;
      }

      paint-ruler {
        z-index: 1;
      }

      paint-tool-box {
        margin-top: -2px;
        flex: 1;
      }
    `;
  }

  constructor() {
    super();
    this.areaText = '';
    this.coordinateText = '';
    this.helpText = defaultHelpText;
    this.drawingContext = DRAWING_CONTEXT;
    this.addEventListener(
      'set-help-text',
      ((event: CustomEvent) => {
        this.helpText = event.detail ?? defaultHelpText;
      }) as EventListener,
    );
    this.addEventListener(
      'coordinate',
      ((event: CustomEvent) => {
        this.coordinateText = event.detail ? `${event.detail.x},${event.detail.y}` : '';
      }) as EventListener,
    );
    this.addEventListener(
      'area',
      ((event: CustomEvent) => {
        this.areaText = event.detail
          ? `${event.detail.width}x${event.detail.height}`
          : '';
      }) as EventListener,
    );
    this.addEventListener(
      'drawing-context-changed',
      ((event: CustomEvent) => {
        this.drawingContext = event.detail;
      }) as EventListener,
    );
    this.addEventListener(
      'invoke-action',
      ((event: CustomEvent) => {
        event.detail(this.drawingContext);
      }) as EventListener,
    );
    this.addEventListener('canvas-ready', () =>
      getLaunchImage(this.drawingContext),
    );
    this.registerHotkeys(menus);
  }

  registerHotkeys(menus: (MenuEntry | MenuSeparator)[]): void {
    menus.forEach((entry) => {
      if ('separator' in entry && entry.separator) {
        return;
      }

      if ('entries' in entry && Array.isArray(entry.entries)) {
        this.registerHotkeys(entry.entries);
      }

      if ('shortcut' in entry && typeof entry.shortcut === 'string') {
        const hotkey = entry.shortcut.includes('Ctrl')
          ? `${entry.shortcut},${entry.shortcut.replace('Ctrl', '⌘')}`
          : entry.shortcut;
        // TODO: Replace PgUp, PgDn + others…
        hotkeys(hotkey.replace('Shft', 'shift'), () => {
          if (entry.instance && 'canExecute' in entry.instance && typeof entry.instance.canExecute === 'function' && entry.instance.canExecute(this.drawingContext)) {
            this.dispatchEvent(
              new CustomEvent('invoke-action', {
                detail: entry.instance?.execute.bind(entry.instance),
                bubbles: true,
                composed: true,
              }),
            );
          }
          return false;
        });
      }
    });
  }

  render(): TemplateResult {
    document.title = `${this.drawingContext.document.title} - Paint`;
    return html`
        <paint-menu-bar
                .entries="${menus}"
                .drawingContext="${this.drawingContext}"
        ></paint-menu-bar>
        <div>
            ${this.drawingContext.view.toolBox
                    ? html`
                        <paint-tool-bar>
                            <paint-ruler></paint-ruler>
                            <paint-tool-box
                                    .drawingContext="${this.drawingContext}"
                            ></paint-tool-box>
                            <paint-ruler></paint-ruler>
                        </paint-tool-bar>`
                    : ''}
            <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
        </div>
        ${this.drawingContext.view.colorBox
                ? html`
                    <paint-tool-bar class="color-box">
                        <paint-color-box .drawingContext="${this.drawingContext}">
                        </paint-color-box>
                        <paint-ruler></paint-ruler>
                    </paint-tool-bar>`
                : ''}
        ${this.drawingContext.view.statusBar
                ? html`
                    <paint-status-bar
                            helpText="${this.helpText}"
                            coordinateText="${this.coordinateText}"
                            areaText="${this.areaText}"
                    ></paint-status-bar>`
                : ''}
    `;
  }
}