import FullHexText from '@/components/text/full_hex_text';
import TableLabeledValue from '@/layout/table_labeled_value/table_labeled_value';
import { kInfiniteGardenNamespace } from '@/models/block_explorer/rollup_entry/data';
import InscriptionAndSignature, {
  inscriptionAndSignatureBincodeCodec,
} from '@/models/inscription/inscription_and_signature';
import DateTimeText from '@/text/date_time_text';
import Text from '@/text/text';
import React from 'react';
import { TransactionDetailContext } from './transaction_detail_loader';

export const InfiniteGardenDisplay: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);
  const data = details.tree;

  if (data.namespace !== kInfiniteGardenNamespace) {
    return <></>;
  }

  let inscriptionAndSignature: null | InscriptionAndSignature = null;
  try {
    inscriptionAndSignature = inscriptionAndSignatureBincodeCodec.decode(
      data.data,
    );
  } catch (err) {
    // All errors would be issues with Decoding
    console.error(
      'encountered error attempting to decode inscription and signature',
      err,
    );
  }

  if (inscriptionAndSignature === null) {
    return (
      <TableLabeledValue className="card--padding">
        <Text text="Inscription" />
        <Text text="Invalid Inscription Data" />
      </TableLabeledValue>
    );
  }

  return (
    <TableLabeledValue className="card--padding inscription--section">
      <Text text="Inscription" />
      <>
        <TableLabeledValue>
          <Text text="Address" />
          <FullHexText
            value={inscriptionAndSignature.inscription.address.address}
          />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Message" />
          <Text text={inscriptionAndSignature.inscription.message} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Time" />
          <DateTimeText date={inscriptionAndSignature.inscription.time} />
        </TableLabeledValue>
      </>
    </TableLabeledValue>
  );
};
