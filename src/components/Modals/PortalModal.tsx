const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(<React.Fragment>...</React.Fragment>, document.body)
    : null;
