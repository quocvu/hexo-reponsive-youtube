function youtube(args) {
  const css =
`<style>.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe, .embed-container object, .embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>`;

  const html =
`<div class='embed-container'>
  <iframe src='https://www.youtube.com/embed/${args[0]}' frameborder='0' allowfullscreen></iframe>
</div>`;

  return `${css}\n\n${html}`;
}

hexo.extend.tag.register('youtuber', youtube);
