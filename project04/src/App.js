import React from 'react';
// import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox';

const App = () => {
    return (
        <div>
            {/* <ValidationSample /> */}
            <ScrollBox ref={(ref) => this.scrollBox=ref} />
            <button onClick={() => this.scrollBox.scrollTopBottom()}>
                맨밑으로
            </button>
        </div>
    );
}

export default App;
