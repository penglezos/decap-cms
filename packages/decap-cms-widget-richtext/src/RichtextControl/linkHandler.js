import { unwrapLink, upsertLink } from '@platejs/link';

export function handleLinkClick({ editor, t }) {
  const url = window.prompt(t('editor.editorWidgets.markdown.linkPrompt'), '');

  if (url) {
    const text = window.prompt(t('editor.editorWidgets.markdown.linkTextPrompt'), '');
    upsertLink(editor, {
      url,
      text: text || url,
      skipValidation: true,
    });
  } else if (url === '') {
    unwrapLink(editor);
  }
}
