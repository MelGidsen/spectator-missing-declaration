import { createPipeFactory, SpectatorPipe } from '@openng/spectator/vitest';
import { ToStringPipe } from './to-string.pipe';

describe('ToStringPipe', () => {
  let spectator: SpectatorPipe<ToStringPipe>;
  const createPipe = createPipeFactory(ToStringPipe);

  it('renders the transformed value', () => {
    spectator = createPipe(`{{ 'test' | toString }}`);

    // TS2339: Property 'toHaveText' does not exist on type 'Assertion<Element>'.
    expect(spectator.element).toHaveText('test');
  });
});
