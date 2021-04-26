import { Module, Global } from '@nestjs/common';
import { getProviders } from './providers';
import { DiscoveryModule } from '@nestjs/core';

@Global()
@Module({
  imports: [
    DiscoveryModule,
  ],
  providers: [
    ...getProviders(),
  ],
})
export class CoreModule {}
