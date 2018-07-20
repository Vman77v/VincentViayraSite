import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Hello There!</h1>
            <p>Welcome, sorry for the mess I am under construction</p>          
        </div>;
    }
}
