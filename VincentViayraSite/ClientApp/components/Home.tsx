import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Welcome to my site, sorry it is still a work in progress!</h1>            
        </div>;
    }
}
