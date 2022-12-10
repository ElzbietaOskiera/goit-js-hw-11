import Notiflix from 'notiflix';

export class NotifyMessage {
  success(count) {
    Notiflix.Notify.success(`Hooray! We found ${count} images.`);
  }

  info() {
    Notiflix.Notify.info(
      'These are all the pictures what we found. Try something else'
    );
  }

  failure() {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
