import { IMaskMixin } from "react-imask";
import Form from "react-bootstrap/Form";

export const MaskedFormControl = IMaskMixin(({ inputRef, mask, ...props }: any) => (
	<Form.Control mask={mask} {...props} ref={inputRef} />
));
