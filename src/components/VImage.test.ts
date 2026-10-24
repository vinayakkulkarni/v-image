import { mount, flushPromises } from '@vue/test-utils';
import { describe, expect, it } from 'vite-plus/test';
import VImage from './VImage.vue';

const pickFile = async (input: HTMLInputElement, file: File) => {
  Object.defineProperty(input, 'files', { value: [file] });
  input.dispatchEvent(new Event('change'));
  await new Promise((resolve) => setTimeout(resolve, 20));
  await flushPromises();
};

describe('VImage', () => {
  it('renders the placeholder, label and file input from props', () => {
    const wrapper = mount(VImage, {
      props: {
        placeholder: { image: '/p.svg', alt: 'Empty' },
        form: { name: 'avatar', label: 'Pick one', accept: 'image/png' },
      },
    });
    expect(wrapper.get('img').attributes('src')).toBe('/p.svg');
    expect(wrapper.get('label').text()).toBe('Pick one');
    const input = wrapper.get('input[type="file"]');
    expect(input.attributes('accept')).toBe('image/png');
    expect(input.attributes('id')).toBe('avatar');
  });

  it('previews a picked file and emits image-loaded with a data URL', async () => {
    const wrapper = mount(VImage, {
      props: { uploaded: { alt: 'Mine', removeBtnText: 'Remove' } },
    });
    const file = new File(['hello'], 'a.png', { type: 'image/png' });
    await pickFile(wrapper.get('input').element as HTMLInputElement, file);

    const loaded = wrapper.emitted('image-loaded');
    expect(loaded).toHaveLength(1);
    expect(String(loaded?.[0]?.[0])).toMatch(/^data:image\/png;base64,/);
    expect(wrapper.get('img').attributes('alt')).toBe('Mine');
    expect(wrapper.get('button').text()).toBe('Remove');
  });

  it('removes the preview and emits image-removed', async () => {
    const wrapper = mount(VImage);
    const file = new File(['hello'], 'a.png', { type: 'image/png' });
    await pickFile(wrapper.get('input').element as HTMLInputElement, file);
    await wrapper.get('button').trigger('click');

    expect(wrapper.emitted('image-removed')).toEqual([[true]]);
    expect(wrapper.find('input[type="file"]').exists()).toBe(true);
  });
});
