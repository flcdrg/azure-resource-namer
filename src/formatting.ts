import { IResource } from "resourcetype-list";
require('format-unicorn');

export interface IFeedback {
  validationFeedback: string;
  resourceNameValid: boolean;
}

export function formatResourceName(selectedResource: IResource, workload: string, environment: string, region: string, instance: number, feedback: IFeedback) {

  let pattern = selectedResource.pattern ?? '{resource}-{workload}-{environment}-{region}';

  if (instance > 0) {
    pattern += selectedResource.instanceSuffix ?? '-{instance}';
  }

  const name = pattern.formatUnicorn({ resource: selectedResource.abbrev, workload: workload, environment: environment, region: region, instance: String(instance).padStart(3, '0') });

  if (name.length > selectedResource?.maxLength) {
    feedback.validationFeedback = `Length exceeds maximum ${selectedResource.maxLength} characters`;
    feedback.resourceNameValid = false;

  } else if (selectedResource.regex && !selectedResource.regex?.test(name)) {
    feedback.validationFeedback = 'Name must only contain: ' + selectedResource.description ?? selectedResource.regex.source;
    feedback.resourceNameValid = false;

  } else {
    feedback.resourceNameValid = true;
  }
  return name;
}
