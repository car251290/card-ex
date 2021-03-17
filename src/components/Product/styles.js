import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '50.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    //make or try the button here
  },
  cardContent: {
    display: 'flex',
    margintop: "1px",
    justifyContent: 'space-between',
  },
  Button: {
    background:'#FE6B8B 30%, #FF8E53 90%)',
    color: 'Red',
    height: 70,
    padding: '20px 30px',
    margin: 8,
  
    
  },
}));
