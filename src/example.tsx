import * as React from "react";
import { Button } from "azure-devops-ui/Button";
import { Dialog } from "azure-devops-ui/Dialog";
import { Observer } from "azure-devops-ui/Observer";
import { ObservableValue } from "azure-devops-ui/Core/Observable";

export default class DialogExample extends React.Component {
    private isDialogOpen = new ObservableValue<boolean>(false);

    public render() {
        const onDismiss = () => {
            this.isDialogOpen.value = false;
        };
        return (
            <div>
                <Button
                    text="Open Dialog"
                    onClick={() => {
                        this.isDialogOpen.value = true;
                    }}
                />
                <Observer isDialogOpen={this.isDialogOpen}>
                    {(props: { isDialogOpen: boolean }) => {
                        return props.isDialogOpen ? (
                            <Dialog
                                titleProps={{ text: "Confirm" }}
                                footerButtonProps={[
                                    {
                                        text: "Cancel",
                                        onClick: onDismiss
                                    },
                                    {
                                        text: "Discard Changes",
                                        onClick: onDismiss
                                    },
                                    {
                                        text: "Save Changes",
                                        onClick: onDismiss,
                                        primary: true
                                    }
                                ]}
                                onDismiss={onDismiss}
                            >
                                You have modified this work item. You can save your changes, discard
                                your changes, or cancel to continue editing.
                            </Dialog>
                        ) : null;
                    }}
                </Observer>
            </div>
        );
    }
}
