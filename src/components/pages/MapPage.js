import React from 'react';

import Sidebar from '../Sidebar';
import Map from '../Map';

const App = () => {
    return (
        <div>
            <Map interact={true} height="100vh" />
            <Sidebar map="active" />
        </div>
    );
}

export default App;
