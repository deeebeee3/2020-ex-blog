import React from 'react';
//import { fetchUser } from '../actions/index';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render(){
        const { user } = this.props;

        if(!user){
            return null;
        }

        return (
            <div className="header">
                {user.name}
            </div>
        );
    }
}

//ownProps is a reference to same props passed to component
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(
    mapStateToProps, 
    null
    /* { fetchUser } */
)(UserHeader);