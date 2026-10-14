import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { NodeMetadata } from '@/service/espresso_staking_api_service/common/node_metadata';
import { NodeMetadataContent } from '@/service/espresso_staking_api_service/common/node_metadata_content';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ValidatorNodeContext } from '../../../contexts/validator_node_context';
import { ValidatorName } from '../validator_name';

const address = '0x4c57e041e38ad226186980af1ab67b391e074c4d';

function validatorNamed(name: null | string): NodeSetEntry {
  return new NodeSetEntry(
    hexArrayBufferCodec.decode(address),
    new TaggedBase64('BLS_VER_KEY', new ArrayBuffer(0)),
    0n,
    Ratio.floatingPoint(0.1),
    name === null
      ? null
      : new NodeMetadata(
          new URL('https://example.com/metadata.json'),
          new NodeMetadataContent(name, null, null, null, null, null),
        ),
  );
}

function renderName(validator: NodeSetEntry, linkToDetails?: boolean) {
  return render(
    <ValidatorNodeContext.Provider value={validator}>
      <ValidatorName linkToDetails={linkToDetails} />
    </ValidatorNodeContext.Provider>,
  );
}

describe('ValidatorName', () => {
  it('should render plain text by default', () => {
    renderName(validatorNamed('node101'));

    expect(screen.getByText('node101')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should link the name to the detail page when requested', () => {
    renderName(validatorNamed('node101'), true);

    const link = screen.getByRole('link', { name: 'node101' });
    expect(link).toHaveAttribute('href', `/validator?address=${address}`);
  });

  it('should keep the copy button outside of the link', () => {
    renderName(validatorNamed('node101'), true);

    const link = screen.getByRole('link');
    const copyButton = screen.getByTitle('Copy Contents');
    expect(link).not.toContainElement(copyButton);
  });

  it('should link the address when the validator has no name', () => {
    renderName(validatorNamed(null), true);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/validator?address=${address}`,
    );
  });
});
