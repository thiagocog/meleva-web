import ReduxToastr from 'react-redux-toastr'

const Toastr = () => {
    <ReduxToastr
        timeout={6000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-right"
        gesState={(state) => state.toastr}
        transitionIn="bounceIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
    />
}

export default Toastr