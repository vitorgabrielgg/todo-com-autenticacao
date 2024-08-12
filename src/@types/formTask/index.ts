interface FormElements extends HTMLFormControlsCollection {
  task: HTMLInputElement;
}

export interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
