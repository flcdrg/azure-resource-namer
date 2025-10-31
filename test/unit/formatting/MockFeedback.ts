import { IFeedback } from "../../../src/formatting";

export class MockFeedback implements IFeedback {
  validationFeedback!: string;
  resourceNameValid!: boolean;
}
