import type { ServiceMenuResponse } from '../type/http/responses/ServiceMenuResponse';
import getCached from './cache/get-cached';

type ServiceMenuItem = {
  icon: string;
  title: string;
  url: string;
};

export type ServiceMenuResponse = ServiceMenuItem[];

export default async function getOssServices(): Promise<ServiceMenuResponse> {
  return getCached('services-menu', async () => {
    const resp = await fetch('https://webfiles.pfizer.com/file/3401ce30-3119-422a-a4f2-01fdcb60df4e');
    const items = (await resp.json()) as ServiceMenuResponse;

    return Promise.all(
      items.map(async (item) => {
        const iconResp = await fetch(item.icon);
        item.icon = await iconResp.text();

        return item;
      })
    );
  });
}
