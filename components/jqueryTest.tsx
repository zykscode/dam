/* eslint-disable func-names */

/// <reference types="jquery" />

'use client';

import $ from 'jquery';
import { useEffect } from 'react';

interface CursorProps {
  isOpen: boolean;
}

declare global {
  interface Window {
    jQuery: any;
  }
}

const Cursor: React.FC<CursorProps> = ({ isOpen }: CursorProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      const $splideList = $('.splide__list, .trigger');
      const $cursor = $('.cursor');
      const $cursorDot1 = $('.cursor__dot1');
      const $cursorDot2 = $('.cursor__dot2');
      const $cursorText = $('.cursor__text');
      const $control = $('.control');
      const $html = $('body');
      console.log($html);
      $splideList
        .on('mouseenter', function () {
          $cursorDot1.addClass('is--larger');
          $cursorDot2.addClass('is--larger');
          $cursorText
            .removeClass('text-drag')
            .addClass(isOpen ? 'text-close' : 'text-open');
        })
        .on('mouseleave', function () {
          $cursorDot1.removeClass('is--larger');
          $cursorDot2.removeClass('is--larger');
        });

      $control
        .on('mouseenter', function () {
          $cursorDot1.addClass('opacity-0');
          $cursorDot2.addClass('light-ring');
        })
        .on('mouseleave', function () {
          $cursorDot1.removeClass('opacity-0');
          $cursorDot2.removeClass('light-ring');
        });

      $('.trigger').on('click', function () {
        $cursor.toggleClass('hide-cursor');
        $html.toggleClass('overflow-hidden');
      });
    } else {
      console.log('jQuery is not loaded');
    }
  }, [isOpen]);

  return null; // or render the custom cursor element
};

export default Cursor;
