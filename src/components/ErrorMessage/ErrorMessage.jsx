import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
    return (
    <div className={css.overlay}>
      <div className={css.error}>Error! API Request Failed!</div>
    </div>
    )
};

export default ErrorMessage;
