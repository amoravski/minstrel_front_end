import React from 'react';

import Sidebar from '../Sidebar';
import DisplayMap from '../map/DisplayMap';

const App = () => {
    return (
        <div>
            <DisplayMap interact={true} height="100vh" />
            <Sidebar map="active" />
        </div>
    );
}

export default App;
