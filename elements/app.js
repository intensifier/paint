import {css, html, LitElement} from '../web_modules/lit-element.js';

class App extends LitElement {
    static get styles() {
        return css`
            :host {
                --button-face: rgb(192 192 192);
                --canvas: rgb(128 128 128);
                --button-text: black;
                --highlight: rgb(0 0 128);
                --highlight-text: white;
                
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 9pt;
 
                display: inline-flex;
                flex-direction: column;
                background-color: var(--canvas);
                color: var(--button-text);
            }
            
            div {
                overflow: hidden;
                flex: 1;
                display: flex;
                flex-direction: row;
            }
            
            div > paint-canvas {
                flex: 1;
            }
            
            div > paint-tool-bar {
                min-width: 57px;
            }
            
            paint-tool-bar.color-bar {
                height: 47px;
            }
        `;
    }

    render() {
        return html`
            <paint-menu-bar></paint-menu-bar>
            <div>
                <paint-tool-bar></paint-tool-bar>
                <paint-canvas></paint-canvas>
            </div>
            <paint-tool-bar class="color-bar"></paint-tool-bar>
            <paint-status-bar></paint-status-bar>
        `;
    }
}

customElements.define('paint-app', App);