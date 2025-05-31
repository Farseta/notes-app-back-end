const { NotePayloadSchema } = require('./schema');
const InvarianError = require('../../exceptions/InvariantError');

const notesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvarianError(validationResult.error.message);
    }
  },

};
module.exports = notesValidator;