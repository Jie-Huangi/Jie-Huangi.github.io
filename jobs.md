---
layout: page
title: Jobs
permalink: /jobs/
hideHomeActive: true
---

{% assign jobs = site.data.jobs.items %}
{% assign rejected = jobs | where: "status", "rejected" %}
{% assign assessed = jobs | where: "status", "assessed" %}
{% assign waiting = jobs | where: "status", "waiting" %}

<div class="jobs-board">
  <p class="jobs-intro">投递进度一览 · 更新于 {{ site.data.jobs.updated }}</p>

  <div class="jobs-summary">
    <div class="jobs-stat jobs-stat--rejected">
      <span class="jobs-stat__num">{{ rejected.size }}</span>
      <span class="jobs-stat__label">❌ 已拒</span>
    </div>
    <div class="jobs-stat jobs-stat--assessed">
      <span class="jobs-stat__num">{{ assessed.size }}</span>
      <span class="jobs-stat__label">● 已测评</span>
    </div>
    <div class="jobs-stat jobs-stat--waiting">
      <span class="jobs-stat__num">{{ waiting.size }}</span>
      <span class="jobs-stat__label">○ 等待中</span>
    </div>
  </div>

  <ul class="jobs-list">
    {% for job in jobs %}
    <li class="jobs-row">
      <span class="jobs-company">{{ job.company }}</span>
      {% if job.status == 'rejected' %}
      <span class="jobs-badge jobs-badge--rejected">❌ 已拒</span>
      {% elsif job.status == 'assessed' %}
      <span class="jobs-badge jobs-badge--assessed">● 已测评</span>
      {% else %}
      <span class="jobs-badge jobs-badge--waiting">○ 等待中</span>
      {% endif %}
      <span class="jobs-progress">{{ job.progress }}</span>
    </li>
    {% endfor %}
  </ul>
</div>
