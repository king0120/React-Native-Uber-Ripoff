import { connect } from 'react-redux';
import Home from '../components/Home';
import {setName} from '../modules/home';

const mapStateToProps = (state) => ({
  name: state.home.name
});

const mapActionsToProps = {
  setName
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
