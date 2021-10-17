import { IFeedback } from "formatting";

export class MockFeedback implements IFeedback {
  validationFeedback: string;
  resourceNameValid: boolean;
}
