import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from "reactstrap"
import React from "react"

const ModalExample = () => {
    <Modal>
        <ModalHeader>
            
        </ModalHeader>
        <ModalBody>
            <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="name" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Lastname</Label>
                <Input type="text" name="lastname"  placeholder="password placeholder" />
            </FormGroup>

        </ModalBody>
        <ModalFooter>

        </ModalFooter>
    </Modal>
}

export default ModalExample