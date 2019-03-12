import Typography from 'typography'
// import irvingTheme from 'typography-theme-irving'

const baseFont = ['Handlee', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', '游ゴシック Medium', 'YuGothic', 'YuGothicM', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'sans-serif']


const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.38,
  scaleRatio: 1,
  googleFonts: [{ name: 'Handlee', styles: ['400'], },{ name: 'Coming Soon', styles: ['400'], },{ name: 'ZCOOL QingKe HuangYou', styles: ['400'], },],
  headerFontFamily: baseFont,
  bodyFontFamily: baseFont,
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 700,
  bodyWight: 400,
  boldWight: 400,
  overrideStyles: ({ rhythm }, options) => {
    return{
      html: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      },
      a: {
       color: 'darkgoldenrod',
       textDecoration: 'none', 
       fontWight: 'bold',
      },
      "a:hover": {
       color: '#6ca8f8',
       transform: 'translateY(-30px)',
       
      },
    }
  },
})
export default typography

