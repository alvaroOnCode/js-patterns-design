/**
 * Closures
 */

/**
 * Use case for Mongoose
 */
const auditProps = {
  createdAt: {
    default: new Date()
  },
  updatedAt: {
    default: new Date()
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
};

const someModel = defaultProps => {
  return (name, props) => {
    const schema = mongoose.Schema({
      ...defaultProps,
      ...props
    });

    return mongoose.model(name, schema);
  }
};

export const withAudit = someModel(auditProps);

/**
 * - Warning! -
 * Code bellow would be in another file.
 */

import withAudit from ('withAudit.js');

withAudit('Product', {
  name: String,
  description: String
});

/**
 * - Warning! -
 * This code would create an onject in MongoDB which
 * would have a name and description properties plus
 * createdAt, updatedAt, createdBy and updatedBy.
 */
