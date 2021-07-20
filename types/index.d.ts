import Vue, { VueConstructor } from 'vue';

type CommonFields = {
  wrapper?: string;
  alt?: string;
  imgClass?: string;
  btnClass?: string;
};

export type Placeholder = {
  image?: string;
} & CommonFields;

export type VImageForm = {
  name?: string;
  label?: string;
  accept?: string;
};

export type Uploaded = {
  removeBtnText?: string;
} & CommonFields;

export type Props = {
  wrapper?: string;
  placeHolder?: Placeholder;
};

export const VImage: VueConstructor<Vue>;
