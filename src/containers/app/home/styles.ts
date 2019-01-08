import { Styles } from 'reactxp';

export default {
  container: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  }),
  titleText: Styles.createTextStyle({
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  }),
};
