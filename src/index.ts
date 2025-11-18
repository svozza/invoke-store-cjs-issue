import { InvokeStore } from '@aws/lambda-invoke-store';

export const handler = async (event: unknown) => {
    const invokeStore = await InvokeStore.getInstanceAsync();
    invokeStore.set('key', 'value');
}