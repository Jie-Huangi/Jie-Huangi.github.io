---
layout: page
title: About
permalink: /about/
hideHomeActive: true
---

{% assign a = site.data.about %}

<div class="about-page" id="about-page" data-lang="zh">
  <div class="about-top">
    <div class="about-identity">
      <h2 class="about-name">Jie Huang / 黄杰</h2>
    </div>
    <div class="about-lang-switch" role="group" aria-label="Language">
      <button type="button" class="about-lang-btn is-active" data-set-lang="zh">{{ a.zh.switch_label }}</button>
      <button type="button" class="about-lang-btn" data-set-lang="en">{{ a.en.switch_label }}</button>
    </div>
  </div>

  <div class="about-panel about-panel--zh">
    <p class="about-tagline">{{ a.zh.tagline }}</p>
    <p class="about-intro">{{ a.zh.intro }}</p>

    <div class="about-stats">
      {% for s in a.stats %}
      <div class="about-stat">
        <span class="about-stat__num">{{ s.value }}</span>
        <span class="about-stat__label">{{ s.label_zh }}</span>
      </div>
      {% endfor %}
    </div>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.zh.sections.education }}</h3>
      <ul class="about-edu">
        {% for item in a.education %}
        <li class="about-edu__item">
          <span class="about-edu__period">{{ item.period_zh }}</span>
          <span class="about-edu__body">
            <strong>{{ item.school_zh }}</strong>
            <span class="about-edu__detail">{{ item.detail_zh }}</span>
          </span>
        </li>
        {% endfor %}
      </ul>
    </section>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.zh.sections.papers }}</h3>
      <ol class="about-papers">
        {% for p in a.papers %}
        <li class="about-paper">
          <div class="about-paper__meta">
            <span class="about-paper__year">{{ p.year }}</span>
            <span class="about-badge">{{ a.zh.published }}</span>
          </div>
          <h4 class="about-paper__title">{% if p.title_zh %}{{ p.title_zh }}{% else %}{{ p.title }}{% endif %}</h4>
          <p class="about-paper__authors">{{ p.authors }}</p>
          <p class="about-paper__venue">
            <em>{% if p.journal_zh %}{{ p.journal_zh }}{% else %}{{ p.journal }}{% endif %}</em>
            <span>· {{ p.venue }}</span>
          </p>
          <p class="about-paper__links">
            {% if p.doi %}<a href="{{ p.doi }}" target="_blank" rel="noopener">{{ a.zh.doi }}</a>{% endif %}
            {% if p.pdf %}<a href="{{ site.url }}{{ p.pdf }}" target="_blank" rel="noopener">{{ a.zh.pdf }}</a>{% endif %}
          </p>
        </li>
        {% endfor %}
      </ol>
    </section>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.zh.sections.review }}</h3>
      <p class="about-review">{{ a.journals_reviewed | join: " · " }}</p>
    </section>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.zh.sections.follow }}</h3>
      <ul class="about-follow">
        <li>{{ a.zh.email }} · <a href="mailto:{{ a.email }}">{{ a.email }}</a></li>
        <li><a href="https://github.com/{{ site.github }}" target="_blank" rel="noopener">Github</a></li>
        <li><a href="https://twitter.com/{{ site.twitter }}" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://www.zhihu.com/people/{{ site.zhihu }}" target="_blank" rel="noopener">知乎</a></li>
        <li><a href="https://www.v2ex.com/member/{{ site.v2ex }}" target="_blank" rel="noopener">V2EX</a></li>
        <li><a href="{{ site.url }}{{ a.cv }}" target="_blank" rel="noopener">{{ a.zh.download_cv }}</a></li>
      </ul>
    </section>
  </div>

  <div class="about-panel about-panel--en" hidden>
    <p class="about-tagline">{{ a.en.tagline }}</p>
    <p class="about-intro">{{ a.en.intro }}</p>

    <div class="about-stats">
      {% for s in a.stats %}
      <div class="about-stat">
        <span class="about-stat__num">{{ s.value }}</span>
        <span class="about-stat__label">{{ s.label_en }}</span>
      </div>
      {% endfor %}
    </div>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.en.sections.education }}</h3>
      <ul class="about-edu">
        {% for item in a.education %}
        <li class="about-edu__item">
          <span class="about-edu__period">{{ item.period_en }}</span>
          <span class="about-edu__body">
            <strong>{{ item.school_en }}</strong>
            <span class="about-edu__detail">{{ item.detail_en }}</span>
          </span>
        </li>
        {% endfor %}
      </ul>
    </section>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.en.sections.papers }}</h3>
      <ol class="about-papers">
        {% for p in a.papers %}
        <li class="about-paper">
          <div class="about-paper__meta">
            <span class="about-paper__year">{{ p.year }}</span>
            <span class="about-badge">{{ a.en.published }}</span>
          </div>
          <h4 class="about-paper__title">{{ p.title }}</h4>
          <p class="about-paper__authors">{{ p.authors }}</p>
          <p class="about-paper__venue">
            <em>{{ p.journal }}</em>
            <span>· {{ p.venue }}</span>
          </p>
          <p class="about-paper__links">
            {% if p.doi %}<a href="{{ p.doi }}" target="_blank" rel="noopener">{{ a.en.doi }}</a>{% endif %}
            {% if p.pdf %}<a href="{{ site.url }}{{ p.pdf }}" target="_blank" rel="noopener">{{ a.en.pdf }}</a>{% endif %}
          </p>
        </li>
        {% endfor %}
      </ol>
    </section>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.en.sections.review }}</h3>
      <p class="about-review">{{ a.journals_reviewed | join: " · " }}</p>
    </section>

    <section class="about-section">
      <h3 class="about-section__title">{{ a.en.sections.follow }}</h3>
      <ul class="about-follow">
        <li>{{ a.en.email }} · <a href="mailto:{{ a.email }}">{{ a.email }}</a></li>
        <li><a href="https://github.com/{{ site.github }}" target="_blank" rel="noopener">Github</a></li>
        <li><a href="https://twitter.com/{{ site.twitter }}" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://www.zhihu.com/people/{{ site.zhihu }}" target="_blank" rel="noopener">Zhihu</a></li>
        <li><a href="https://www.v2ex.com/member/{{ site.v2ex }}" target="_blank" rel="noopener">V2EX</a></li>
        <li><a href="{{ site.url }}{{ a.cv }}" target="_blank" rel="noopener">{{ a.en.download_cv }}</a></li>
      </ul>
    </section>
  </div>
</div>

<script src="{{ site.url }}/js/about-lang.js" defer></script>
