import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

export const DD_RUM = () => {
  return datadogRum.init({
    applicationId: 'bcbc0c95-f848-4037-b884-e03c487f93ca',
    clientToken: 'pube4e225caaa611546d5cea42895aafe80',
    site: 'datadoghq.com',
    service:'rum_app1',
    env:'dev',
    version: "1.0.0",
    sampleRate: 100,
    trackInteractions: true,
    useCrossSiteSessionCookie: true,
    trackSessionAcrossSubdomains: true
  });
};

export const DD_LOGS = () => {
  return datadogLogs.init({
    clientToken: "pube4e225caaa611546d5cea42895aafe80",
    site: 'datadoghq.com',
    service:'rum_app1',
    env:'dev',
    version: "1.0.0",
    sampleRate: 100,
    trackInteractions: true,
    useCrossSiteSessionCookie: true,
    trackSessionAcrossSubdomains: true,
    forwardErrorsToLogs: true,
    silentMultipleInit: true
  });
};
