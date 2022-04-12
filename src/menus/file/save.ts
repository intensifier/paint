import { fileSave, FileSystemHandle } from 'browser-fs-access';
import { toBlob } from '../../helpers/to-blob';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';
import { SaveAsAction } from './save-as';

export class SaveAction implements MenuAction {
  async execute(drawingContext: DrawingContext): Promise<void> {
    if (drawingContext.canvas && drawingContext.document.handle) {
      const blob = await toBlob(drawingContext.canvas);
      // TODO: Remove cast to unknown once types overlap
      await fileSave(
        blob,
        undefined,
        drawingContext.document.handle as unknown as FileSystemHandle,
      );
    } else {
      await new SaveAsAction().execute(drawingContext);
    }
  }
}
