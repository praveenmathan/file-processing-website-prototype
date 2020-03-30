import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import loadable from 'react-loadable';

const LoadingComponent = () => <h3>please wait...</h3>;

const HomePageCompPromise = () => {
    return import(
        /* webpackChunkName: "bundle.home" */
        './components/homepage/HomePage'
    );
};

const AsyncHomePageComponent = loadable({
    loader: HomePageCompPromise,
    loading: LoadingComponent
});

const FileStatusCompPromise = () => {
    return import(
        /* webpackChunkName: "bundle.fileStatus" */
        './components/filestatus/FileStatus'
    );
};

const AsyncFileStatusComponent = loadable({
    loader: FileStatusCompPromise,
    loading: LoadingComponent
});

const NotificationCompPromise = () => {
    return import(
        /* webpackChunkName: "bundle.notifications" */
        './components/notifications/Notifications'
    );
};

const AsyncNotificationComponent = loadable({
    loader: NotificationCompPromise,
    loading: LoadingComponent
});

class Routes extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {}

    componentDidUpdate () {}


  homeRoute = () => {
      return <AsyncHomePageComponent />;
  };

  fileStatus = () => {
      return <AsyncFileStatusComponent />;
  };

  notification = () => {
      return <AsyncNotificationComponent />;
  };
  render () {
      console.log('Routes');
      return (
          <BrowserRouter>
              <div>
                  <header>
                      <Header />
                  </header>
                  <div>
                      <Switch>
                          <Route exact path="/" render={this.homeRoute} />
                          <Route path="/filestatus" render={this.fileStatus} />
                          <Route path="/notification" render={this.notification} />
                      </Switch>
                  </div>
                  <footer>
                      <Footer />
                  </footer>
              </div>
          </BrowserRouter>
      );
  }
}
export default Routes;
