import FormInput from 'components/fields/FormInput';
import FormTextarea from 'components/fields/FormTextArea';

export const nameField = {
  name: 'name',
  title: 'Name',
  placeholder: 'Name',
  rules: {
    required: 'This field is required.',
    maxLength: { value: 100, message: `This Name field can't be more than 100 characters long` },
  },
  inputField: FormInput,
};

export const slugField = {
  name: 'slug',
  title: 'Slug',
  placeholder: 'Slug',
  rules: {
    required: 'This field is required.',
    maxLength: { value: 80, message: `This Slug field can't be more than 80 characters long` },
  },
  inputField: FormInput,
};

export const descriptionField = {
  name: 'description',
  title: 'Description',
  placeholder: 'Description',
  rules: {
    required: 'This field is required.',
    maxLength: { value: 1000, message: `This Description field can't be more than 1000 characters long` },
  },
  inputField: FormTextarea,
};

export const keywordsField = {
  name: 'keywords',
  title: 'Keywords',
  placeholder: 'Keywords',
  rules: {
    required: 'This field is required.',
    maxLength: { value: 50, message: `This Keywords field can't be more than 50 characters long` },
  },
  inputField: FormInput,
};

export const BuildCollectionFields = [nameField, slugField, descriptionField, keywordsField];
