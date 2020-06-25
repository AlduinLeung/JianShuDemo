import { createGlobalStyle } from 'styled-components'
export const GlobalStyle=createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1593052797318'); /* IE9 */
  src: url('./iconfont.eot?t=1593052797318#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPQAAsAAAAAB9gAAAODAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDFIJ6ATYCJAMQCwoABCAFhG0HSBvsBlGUDkqF7MeB4zpwanEUGkQxJKTw6GpTUv93PcfDf4ef9828/3e2VSrUi/bjS01bAVmNhRLSAAUkYPEusJtLVcbyhQAdz4ZBa6LJHb/8Y+uVpBOW4SJUAFvAOqT3/qFMXslJZJIKuqmaJH+BI3VxqJppEZgPFJc5xnkoF8Dw1oCNPdtigVuQCnqHsSsvYjWBPrM6SmerwxmaktEpEG++q6GZUsia9NCEbsnIFF8Bv1Y+ox+AL/7vx3+wE0IUncroef6wdGDya+CtBa7/Xy/aRQDmeDqwcVSsAUk8lRpuVMLAmoo+pX7VAdA0hbGqZN5a/P+PWHsRNPNfHlURRJeROgD2ULDyi2czYqEMlClQaAFZN5CaoMGkd+AbAzft1qkorW2TocXkZXliFMsLo7LoiMguVWpAPjxhn24BQAV1nGq+CgnHEX9HO2ZjBtTP0i2nIOS4NEOOEIrt6gBh0slMj5p734mLirJRfUppclz//PamOrN7R69Kmj12D969y96+HXbnDtNyz5GRZkIr793jUrT8N7t793iq5w0ttxspov8TXe9mOgQyyCUxw+Ee32+HouIzVoaQ39kgT5vNEImhfZ1sXsdyxZcUZH4rqn9UVwV/B4by0bEWs0iIYGMAGIHhV0gpvHvWtO79qL9gS7lKTp6WXVd8720aOfo9s0Shwd9DJsAdbD2feZKSMqRf7IpaT55swybVleJWSo9ncS02uJ+S8nh1hTFv/YDI4gLBmIptiCBvPiGaR4UN5QN8/K/HsU8g9bpSEzpej+GjH/g31pYqD+PE7L42OsFPRcNPSPggqTL/ArM183cxW2alyjaUmTLHZmjGtJXopKBPH35ShDF/Y5gmQawLjTMhFD1moGrmkIldg45+e9DVHEKfVevx/caxisherPgCEEZ8QzHkO1QjfpCJ/YWOKf/QNRIY+lyE1Iz9FiJDuTJpIQdvr+ibNLGWWlSQfiT3HmlOsn38lbjw3TjsDbLhNSXEY/QpHu5IxKLlNMYVWI+iKMWM04CM9DyRbNzv27In9Uwag3KKEU0QB7p5hXxGKmHd/ELlfv6IuO4iGtdkVCivCCv4taOhnkEL5FqQtMq4lnMKD64RISxksVQMrYCORGYghbLyZgFiiB6vhy8z1ke5bFtBb35R/IQLoI8xIKNEjYyOcqzbR9+7azwyoZ+oVJ24jg58Vw4AAA==') format('woff2'),
  url('./iconfont.woff?t=1593052797318') format('woff'),
  url('./iconfont.ttf?t=1593052797318') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1593052797318#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`