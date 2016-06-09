import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import serialize from 'serialize-javascript';
import * as ActionCreators from '../../actions/forms';
import {
  SimpleForm,
  SynchronousValidationForm,
  AsynchronousBlurValidationForm
} from '../../components';

@connect(
  state => ({ reduxAsyncConnect: state.reduxAsyncConnect }),
  ActionCreators
)
class Forms extends Component {//eslint-disable-line
  static propTypes = {
    reduxAsyncConnect: PropTypes.object.isRequired,
    post: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./Forms.scss');
    const { post, reduxAsyncConnect } = this.props;
    return (
      <div className={styles.forms}>
        <Helmet title="表单"/>
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <h4>SimpleForm</h4>
              <SimpleForm onSubmit={post}/>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6}>
                  <h4>SynchronousValidationForm</h4>
                  <SynchronousValidationForm onSubmit={post}/>
                </Col>
                <Col xs={12} md={6}>
                  <h4>AsynchronousBlurValidationForm</h4>
                  <AsynchronousBlurValidationForm onSubmit={post}/>
                </Col>
              </Row>
              <br/><br/>
              <Row className="container-fluid">
                表单提交后的响应结果：
                <pre>{serialize(reduxAsyncConnect.forms, { space: 4 })}</pre>
                <br/><br/>
                表单提交后的响应状态：
                <pre>{serialize(reduxAsyncConnect.loadState.forms, { space: 4 })}</pre>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Forms;
