import React, {Component} from 'react';
import Link from '@jetbrains/ring-ui/components/link/link';
import Header, {
  Tray,
  SmartProfile,
  SmartServices
} from '@jetbrains/ring-ui/components/header/header';
import Auth from '@jetbrains/ring-ui/components/auth/auth';
import Footer from '@jetbrains/ring-ui/components/footer/footer';
import Icon from '@jetbrains/ring-ui/components/icon';
import hubLogo from '@jetbrains/logos/hub/hub.svg';
import Button from '@jetbrains/ring-ui/components/button/button';
import Input from '@jetbrains/ring-ui/components/input/input';

import '@jetbrains/ring-ui/components/input-size/input-size.scss';

import styles from './app.css';

export default class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.inputRef = element => {
      console.log(element);
    };
  }
  componentDidMount() {
    // You can uncomment this after registering your client as a Hub service
    // https://www.jetbrains.com/help/hub/2017.3/OAuth-2.0-Authorization.html#d79479e312
    // this.auth.init();
  }

  auth = new Auth({
    // clientId: <your client id here>
    serverUri: 'https://hub.jetbrains.com' // replace with your Hub server
  });

  render() {
    return (
      <div>
        <Header>
          <Link href="/">
            <Icon
              glyph={hubLogo}
              size={Icon.Size.Size48}
            />
          </Link>
          <Tray>
            <SmartServices auth={this.auth}/>
            <SmartProfile auth={this.auth}/>
          </Tray>
        </Header>
        <Button active={true} >Button</Button>
        <Input className={'ring-input-size_md'} inputRef={this.inputRef}/>
        <div className={styles.content}>
          {'App content'}
        </div>
        <Footer/>
      </div>
    );
  }
}
