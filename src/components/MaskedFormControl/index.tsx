import { IMaskMixin } from "react-imask";
import Form from "react-bootstrap/Form";

export const MaskedFormControl = IMaskMixin(({ inputRef, ...props }: any) => (
	<Form.Control {...props} ref={inputRef} />
));
