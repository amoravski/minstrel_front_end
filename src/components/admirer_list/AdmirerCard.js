import React from 'react';

const AdmirerCard = ({ name, admin }) => {
    return (
            <div>
            {admin ?
            <div className="ui">
                <div className="content">
                    <div className="center aligned header">
                        {name}
                    </div>
                </div>
                <button>
                    DELETE
                </button>
            </div> : 
            <div className="ui">
                <div className="ui small circular image">
                    <img alt="Performer profile" src="https://static1.squarespace.com/static/50e70b75e4b0d5ee8b74860b/t/515602bfe4b0fc0d94666eb5/1364591296832/profile+blank.jpg" />
                </div>
                <div className="content">
                    <div className="center aligned header">
                        {name}
                    </div>
                </div>
            </div>}
            </div>
    );
}

export default AdmirerCard;
