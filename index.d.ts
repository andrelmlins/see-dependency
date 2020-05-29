declare module 'see-dependency' {
  export function see(name: string, registry: string): Promise<any>;
  export function seeSync(name: string, registry: string): any;
}
