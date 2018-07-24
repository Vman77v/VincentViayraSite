import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/Projects' component={Projects} />
    <Route exact path='/Blog' component={Blog} />
</Layout>;
