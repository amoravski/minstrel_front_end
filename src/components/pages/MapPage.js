import React from 'react';

import Sidebar from '../Sidebar';
import Map from '../Map';

const App = () => {
    return (
        <div>
            <Map height="100vh" />
            <Sidebar map="active" />
        </div>
    );
}

export default App;
