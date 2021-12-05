import {withRouter} from 'react-router-dom'

function Dynamic(prop) {
    return (
       
        <div>
            <h1>User Component {prop.match.params.id}</h1>
            <h1>User Component is {prop.match.params.id}</h1>
        </div>
        
    )

}
export default withRouter(Dynamic);