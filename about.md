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
      <p class="about-tagline">
        <span class="about-lang about-lang--zh">{{ a.zh.tagline }}</span>
        <span class="about-lang about-lang--en">{{ a.en.tagline }}</span>
      </p>
    </div>
    <div class="about-lang-switch" role="group" aria-label="Language">
      <button type="button" class="about-lang-btn is-active" data-set-lang="zh">{{ a.zh.switch_label }}</button>
      <button type="button" class="about-lang-btn" data-set-lang="en">{{ a.en.switch_label }}</button>
    </div>
  </div>

  <p class="about-intro">
    <span class="about-lang about-lang--zh">{{ a.zh.intro }}</span>
    <span class="about-lang about-lang--en">{{ a.en.intro }}</span>
  </p>

  <div class="about-stats">
    {% for s in a.stats %}
    <div class="about-stat">
      <span class="about-stat__num">{{ s.value }}</span>
      <span class="about-stat__label">
        <span class="about-lang about-lang--zh">{{ s.label_zh }}</span>
        <span class="about-lang about-lang--en">{{ s.label_en }}</span>
      </span>
    </div>
    {% endfor %}
  </div>

  <section class="about-section">
    <h3 class="about-section__title">
      <span class="about-lang about-lang--zh">{{ a.zh.sections.education }}</span>
      <span class="about-lang about-lang--en">{{ a.en.sections.education }}</span>
    </h3>
    <ul class="about-edu">
      {% for item in a.education %}
      <li class="about-edu__item">
        <span class="about-edu__period">
          <span class="about-lang about-lang--zh">{{ item.period_zh }}</span>
          <span class="about-lang about-lang--en">{{ item.period_en }}</span>
        </span>
        <span class="about-edu__body">
          <strong>
            <span class="about-lang about-lang--zh">{{ item.school_zh }}</span>
            <span class="about-lang about-lang--en">{{ item.school_en }}</span>
          </strong>
          <span class="about-edu__detail">
            <span class="about-lang about-lang--zh">{{ item.detail_zh }}</span>
            <span class="about-lang about-lang--en">{{ item.detail_en }}</span>
          </span>
        </span>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="about-section">
    <h3 class="about-section__title">
      <span class="about-lang about-lang--zh">{{ a.zh.sections.papers }}</span>
      <span class="about-lang about-lang--en">{{ a.en.sections.papers }}</span>
    </h3>
    <ol class="about-papers">
      {% for p in a.papers %}
      <li class="about-paper">
        <div class="about-paper__meta">
          <span class="about-paper__year">{{ p.year }}</span>
          <span class="about-badge">
            <span class="about-lang about-lang--zh">{{ a.zh.published }}</span>
            <span class="about-lang about-lang--en">{{ a.en.published }}</span>
          </span>
        </div>
        <h4 class="about-paper__title">
          {% if p.title_zh %}
          <span class="about-lang about-lang--zh">{{ p.title_zh }}</span>
          <span class="about-lang about-lang--en">{{ p.title }}</span>
          {% else %}
          {{ p.title }}
          {% endif %}
        </h4>
        <p class="about-paper__authors">{{ p.authors }}</p>
        <p class="about-paper__venue">
          {% if p.journal_zh %}
          <em class="about-lang about-lang--zh">{{ p.journal_zh }}</em>
          <em class="about-lang about-lang--en">{{ p.journal }}</em>
          {% else %}
          <em>{{ p.journal }}</em>
          {% endif %}
          <span>· {{ p.venue }}</span>
        </p>
        <p class="about-paper__links">
          {% if p.doi %}
          <a href="{{ p.doi }}" target="_blank" rel="noopener">
            <span class="about-lang about-lang--zh">{{ a.zh.doi }}</span>
            <span class="about-lang about-lang--en">{{ a.en.doi }}</span>
          </a>
          {% endif %}
          {% if p.pdf %}
          <a href="{{ site.url }}{{ p.pdf }}" target="_blank" rel="noopener">
            <span class="about-lang about-lang--zh">{{ a.zh.pdf }}</span>
            <span class="about-lang about-lang--en">{{ a.en.pdf }}</span>
          </a>
          {% endif %}
        </p>
      </li>
      {% endfor %}
    </ol>
  </section>

  <section class="about-section">
    <h3 class="about-section__title">
      <span class="about-lang about-lang--zh">{{ a.zh.sections.review }}</span>
      <span class="about-lang about-lang--en">{{ a.en.sections.review }}</span>
    </h3>
    <p class="about-review">{{ a.journals_reviewed | join: " · " }}</p>
  </section>

  <section class="about-section">
    <h3 class="about-section__title">
      <span class="about-lang about-lang--zh">{{ a.zh.sections.follow }}</span>
      <span class="about-lang about-lang--en">{{ a.en.sections.follow }}</span>
    </h3>
    <ul class="about-follow">
      <li>
        <span class="about-lang about-lang--zh">{{ a.zh.email }}</span>
        <span class="about-lang about-lang--en">{{ a.en.email }}</span>
        · <a href="mailto:{{ a.email }}">{{ a.email }}</a>
      </li>
      <li><a href="https://github.com/{{ site.github }}" target="_blank" rel="noopener">Github</a></li>
      <li><a href="https://twitter.com/{{ site.twitter }}" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://www.zhihu.com/people/{{ site.zhihu }}" target="_blank" rel="noopener">知乎</a></li>
      <li><a href="https://www.v2ex.com/member/{{ site.v2ex }}" target="_blank" rel="noopener">V2EX</a></li>
      <li>
        <a href="{{ site.url }}{{ a.cv }}" target="_blank" rel="noopener">
          <span class="about-lang about-lang--zh">{{ a.zh.download_cv }}</span>
          <span class="about-lang about-lang--en">{{ a.en.download_cv }}</span>
        </a>
      </li>
    </ul>
  </section>
</div>

<script src="{{ site.url }}/js/about-lang.js" defer></script>
