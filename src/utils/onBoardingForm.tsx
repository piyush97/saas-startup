export type onBoardingFormProps = {
  /**
   * id
   *
   * @type {number}
   */
  _id: number;
  /**
   * Id for css
   *
   * @type {string}
   */
  id: string;
  /**
   * label
   *
   * @type {string}
   */
  label: string;

  /**
   * Type of input
   *
   * @type {string}
   */
  type: string;
  /**
   * Helper Text
   *
   * @type {string}
   */
  helperText: string;
};

export const onBoardingForm: onBoardingFormProps[] = [
  {
    _id: 0,
    id: "email",
    label: "Email",
    type: "email",
    helperText: "Enter your email",
  },
];
