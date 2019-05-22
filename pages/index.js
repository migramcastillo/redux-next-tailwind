import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Header from '../components/Header';
import Main from '../components/Main';

const Index = () => {
  return  (
    <>
      <Header />
      <Main />
    </>
  );
}
const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps
)(Index)
