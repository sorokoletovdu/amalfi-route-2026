import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { Route, Day, Plan, SciroccoDay } from '../schemas/route';

// ── Palette (mirrors global.css) ────────────────────────────
const C = {
  seaDeep:        '#0a4a6e',
  sea:            '#1a6fa0',
  seaPale:        '#e8f5fc',
  seaLight:       '#a8d5f0',
  muted:          '#6b7280',
  border:         '#e5e7eb',
  white:          '#ffffff',
  text:           '#1a1a2e',
  // Plans
  planA:          '#d4edda',
  planABorder:    '#28a745',
  planAText:      '#155724',
  planB:          '#fff3cd',
  planBBorder:    '#ffc107',
  planBText:      '#664d03',
  scirocco:       '#f8d7da',
  sciroccoBorder: '#dc3545',
  sciroccoText:   '#721c24',
  // Warnings
  warnCrit:       '#fee2e2',
  warnCritText:   '#991b1b',
  warnWarn:       '#fef3c7',
  warnWarnText:   '#92400e',
  // Base nodes (diagram)
  base:           '#cce5ff',
  baseBorder:     '#0066cc',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    color: C.text,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 25,
  },
  // ── Cover ───────────────────────────────────────────────
  coverPage: {
    backgroundColor: C.seaPale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTitle: {
    fontFamily: 'Playfair',
    fontSize: 26,
    fontWeight: 700,
    color: C.seaDeep,
    textAlign: 'center',
    marginBottom: 6,
  },
  coverSubtitle: {
    fontSize: 13,
    color: C.sea,
    textAlign: 'center',
    marginBottom: 16,
  },
  coverMetaRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 6,
  },
  coverMetaItem: {
    fontSize: 9,
    color: C.muted,
    textAlign: 'center',
  },
  coverMetaValue: {
    fontWeight: 600,
    color: C.text,
  },
  coverRules: {
    marginTop: 20,
    borderTop: `1px solid ${C.seaLight}`,
    paddingTop: 12,
    maxWidth: 380,
  },
  coverRule: {
    fontSize: 8,
    color: C.text,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  // ── Day header ──────────────────────────────────────────
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `2px solid ${C.sea}`,
    paddingBottom: 6,
    marginBottom: 8,
  },
  dayBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: C.sea,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  dayBadgeText: {
    color: C.white,
    fontSize: 8,
    fontWeight: 700,
  },
  dayTitle: {
    fontFamily: 'Playfair',
    fontSize: 16,
    fontWeight: 700,
    color: C.seaDeep,
  },
  dayDate: {
    fontSize: 8,
    color: C.muted,
    marginTop: 1,
  },
  dayMeta: {
    fontSize: 8,
    color: C.muted,
    marginBottom: 6,
  },
  dayNotes: {
    fontSize: 8.5,
    lineHeight: 1.5,
    backgroundColor: C.seaPale,
    borderRadius: 4,
    padding: 6,
    marginBottom: 8,
  },
  // ── Plan cards ──────────────────────────────────────────
  plansRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  planCard: {
    flex: 1,
    borderRadius: 5,
    padding: 7,
  },
  planBadge: {
    fontSize: 6.5,
    fontWeight: 700,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  planTrigger: {
    fontSize: 7.5,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  planDests: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginBottom: 5,
  },
  planDestBadge: {
    fontSize: 8,
    fontWeight: 600,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  planDestArrow: {
    fontSize: 7,
    color: C.muted,
    alignSelf: 'center',
  },
  mooringBox: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 3,
    padding: 5,
    marginBottom: 5,
  },
  mooringName: {
    fontSize: 8,
    fontWeight: 600,
    marginBottom: 2,
  },
  mooringPhone: {
    fontSize: 7.5,
    color: C.sea,
  },
  mooringNote: {
    fontSize: 7.5,
    color: C.muted,
    lineHeight: 1.4,
    marginTop: 2,
  },
  activityItem: {
    fontSize: 8,
    lineHeight: 1.4,
    marginBottom: 2,
  },
  warningBox: {
    flexDirection: 'row',
    gap: 3,
    borderRadius: 3,
    padding: 4,
    marginTop: 4,
  },
  warningText: {
    fontSize: 7.5,
    lineHeight: 1.4,
    flex: 1,
  },
  sciroccoNote: {
    flexDirection: 'row',
    gap: 3,
    backgroundColor: C.scirocco,
    borderRadius: 3,
    padding: 4,
    marginTop: 4,
  },
  sciroccoNoteText: {
    fontSize: 7.5,
    color: C.sciroccoText,
    lineHeight: 1.4,
    flex: 1,
  },
  // ── Overview / decision table ────────────────────────────
  overviewHeader: {
    fontFamily: 'Playfair',
    fontSize: 18,
    fontWeight: 700,
    color: C.seaDeep,
    marginBottom: 4,
  },
  overviewSubtitle: {
    fontSize: 8.5,
    color: C.muted,
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: C.seaDeep,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  tableHeaderCell: {
    fontSize: 7.5,
    fontWeight: 700,
    color: C.white,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: `1px solid ${C.border}`,
    paddingVertical: 5,
    paddingHorizontal: 4,
  },
  tableCell: {
    fontSize: 8,
    lineHeight: 1.4,
    color: C.text,
  },
  tableCellPlanA: {
    backgroundColor: C.planA,
    borderRadius: 3,
    padding: 3,
    fontSize: 7.5,
    color: C.planAText,
    lineHeight: 1.4,
  },
  tableCellPlanB: {
    backgroundColor: C.planB,
    borderRadius: 3,
    padding: 3,
    fontSize: 7.5,
    color: C.planBText,
    lineHeight: 1.4,
  },
  tableCellScirocco: {
    backgroundColor: C.scirocco,
    borderRadius: 3,
    padding: 3,
    fontSize: 7.5,
    color: C.sciroccoText,
    lineHeight: 1.4,
  },
  tableCellMuted: {
    fontSize: 7.5,
    color: C.muted,
  },
  // ── Scirocco page ────────────────────────────────────────
  sciroccoPageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: C.scirocco,
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  sciroccoPageTitle: {
    fontFamily: 'Playfair',
    fontSize: 18,
    fontWeight: 700,
    color: C.sciroccoText,
  },
  sciroccoPageSubtitle: {
    fontSize: 8,
    color: C.sciroccoText,
    marginTop: 2,
    lineHeight: 1.4,
  },
  sciroccoDayCard: {
    borderLeft: `4px solid ${C.sciroccoBorder}`,
    backgroundColor: C.scirocco,
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  sciroccoDayLabel: {
    fontSize: 6.5,
    fontWeight: 700,
    backgroundColor: C.sciroccoBorder,
    color: C.white,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  sciroccoDayTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: C.sciroccoText,
    marginBottom: 3,
  },
  // ── Footer ───────────────────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTop: `1px solid ${C.border}`,
    paddingTop: 4,
  },
  footerText: {
    fontSize: 7,
    color: C.muted,
  },
});

// ── Sub-components ───────────────────────────────────────────

function PlanCardPDF({ plan, variant }: { plan: Plan; variant: 'a' | 'b' }) {
  const isA = variant === 'a';
  const bg     = isA ? C.planA     : C.planB;
  const border = isA ? C.planABorder : C.planBBorder;
  const badgeBg = isA ? C.planABorder : C.planBBorder;
  const badgeColor = isA ? C.white : C.planBText;
  const triggerColor = isA ? C.planAText : C.planBText;
  const label  = isA ? 'ПЛАН А' : 'ПЛАН Б';

  return (
    <View style={[styles.planCard, { backgroundColor: bg, borderLeft: `4px solid ${border}` }]} wrap={false}>
      {/* Badge + trigger */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 4, marginBottom: 4 }}>
        <Text style={[styles.planBadge, { backgroundColor: badgeBg, color: badgeColor }]}>
          {label}
        </Text>
        {plan.trigger && (
          <Text style={[styles.planTrigger, { color: triggerColor, flex: 1 }]}>{plan.trigger}</Text>
        )}
      </View>

      {/* Destinations */}
      <View style={styles.planDests}>
        {plan.destinations.map((dest, i) => (
          <React.Fragment key={i}>
            <Text style={styles.planDestBadge}>{dest}</Text>
            {i < plan.destinations.length - 1 && (
              <Text style={styles.planDestArrow}>→</Text>
            )}
          </React.Fragment>
        ))}
      </View>

      {/* Mooring */}
      <View style={styles.mooringBox}>
        <Text style={styles.mooringName}>⚓ {plan.mooring.name ?? plan.mooring.type}</Text>
        {plan.mooring.phone && (
          <Text style={styles.mooringPhone}>{plan.mooring.phone}</Text>
        )}
        {plan.mooring.notes && (
          <Text style={styles.mooringNote}>{plan.mooring.notes}</Text>
        )}
        {plan.mooring.booking_urls.length > 0 && (
          <Text style={[styles.mooringNote, { color: C.sea }]}>
            {plan.mooring.booking_urls.map((_, i) => (i === 0 ? '📋 Бронирование' : ' · Navily')).join('')}
          </Text>
        )}
      </View>

      {/* Activities */}
      {plan.activities.map((act, i) => (
        <Text key={i} style={styles.activityItem}>· {act}</Text>
      ))}

      {/* Warnings */}
      {plan.warnings.map((w, i) => (
        <View
          key={i}
          style={[
            styles.warningBox,
            {
              backgroundColor: w.severity === 'critical' ? C.warnCrit : C.warnWarn,
            },
          ]}
        >
          <Text style={{ fontSize: 8 }}>
            {w.severity === 'critical' ? '🚨' : '⚠️'}
          </Text>
          <Text
            style={[
              styles.warningText,
              { color: w.severity === 'critical' ? C.warnCritText : C.warnWarnText },
            ]}
          >
            {w.text}
          </Text>
        </View>
      ))}

      {/* Scirocco note */}
      {plan.scirocco_note && (
        <View style={styles.sciroccoNote}>
          <Text style={{ fontSize: 8 }}>🌪️</Text>
          <Text style={styles.sciroccoNoteText}>{plan.scirocco_note}</Text>
        </View>
      )}
    </View>
  );
}

function DayPage({ day, routeTitle }: { day: Day; routeTitle: string }) {
  return (
    <Page size="A4" style={styles.page} break>
      {/* Day header */}
      <View style={styles.dayHeader}>
        <View style={styles.dayBadge}>
          <Text style={styles.dayBadgeText}>{day.day}</Text>
        </View>
        <View>
          <Text style={styles.dayTitle}>{day.title}</Text>
          <Text style={styles.dayDate}>{day.date}</Text>
        </View>
      </View>

      {/* Departure */}
      {day.departure_time && (
        <Text style={styles.dayMeta}>Выход: {day.departure_time}</Text>
      )}

      {/* Notes */}
      {day.notes && (
        <Text style={styles.dayNotes}>{day.notes}</Text>
      )}

      {/* Plans */}
      <View style={styles.plansRow}>
        <PlanCardPDF plan={day.plan_a} variant="a" />
        {day.plan_b && <PlanCardPDF plan={day.plan_b} variant="b" />}
      </View>

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{routeTitle}</Text>
        <Text
          style={styles.footerText}
          render={({ pageNumber, totalPages }) =>
            `День ${day.day}  ·  ${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </Page>
  );
}

// Decision table rows derived from route data
type OverviewRow = {
  day: string;
  planA: string;
  planB: string;
  scirocco: string;
};

function buildOverviewRows(route: Route): OverviewRow[] {
  const sciroccoMap: Record<string, string> = {};
  for (const sd of route.scirocco_branch) {
    sciroccoMap[sd.day_ref] = `${sd.destination}\n${sd.mooring.name ?? ''}`;
  }

  return route.days.map((d) => ({
    day: `День ${d.day}\n${d.title}`,
    planA: `${d.plan_a.destinations.join(' → ')}\n${d.plan_a.mooring.name ?? d.plan_a.mooring.type}`,
    planB: d.plan_b
      ? `${d.plan_b.destinations.join(' → ')}\n${d.plan_b.mooring.name ?? d.plan_b.mooring.type}`
      : '',
    scirocco: sciroccoMap[String(d.day)] ?? '',
  }));
}

function OverviewPage({ route }: { route: Route }) {
  const rows = buildOverviewRows(route);
  const col = { day: 95, planA: 130, planB: 120, scirocco: 130 };

  return (
    <Page size="A4" style={styles.page} break>
      <Text style={styles.overviewHeader}>Схема маршрута</Text>
      <Text style={styles.overviewSubtitle}>
        Дерево решений — зелёный = нормальная погода · жёлтый = задержка/нет мест · красный = Scirocco
      </Text>

      {/* Table header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: col.day }]}>День</Text>
        <Text style={[styles.tableHeaderCell, { width: col.planA }]}>План А</Text>
        <Text style={[styles.tableHeaderCell, { width: col.planB }]}>План Б</Text>
        <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Scirocco 🌪️</Text>
      </View>

      {rows.map((row, i) => (
        <View key={i} style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: col.day }]}>{row.day}</Text>
          <View style={{ width: col.planA, paddingRight: 4 }}>
            <Text style={styles.tableCellPlanA}>{row.planA}</Text>
          </View>
          <View style={{ width: col.planB, paddingRight: 4 }}>
            {row.planB
              ? <Text style={styles.tableCellPlanB}>{row.planB}</Text>
              : <Text style={styles.tableCellMuted}>—</Text>
            }
          </View>
          <View style={{ flex: 1 }}>
            {row.scirocco
              ? <Text style={styles.tableCellScirocco}>{row.scirocco}</Text>
              : <Text style={styles.tableCellMuted}>—</Text>
            }
          </View>
        </View>
      ))}

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{route.title}</Text>
        <Text
          style={styles.footerText}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </View>
    </Page>
  );
}

function SciroccoBranchPage({ branch, routeTitle }: { branch: SciroccoDay[]; routeTitle: string }) {
  return (
    <Page size="A4" style={styles.page} break>
      <View style={styles.sciroccoPageHeader}>
        <View>
          <Text style={styles.sciroccoPageTitle}>🌪️ Красная Ветка — Scirocco</Text>
          <Text style={styles.sciroccoPageSubtitle}>
            Активируется при устойчивом южном ветре с Дня 3. Побережье Амальфи и юг Искьи опасны.
          </Text>
        </View>
      </View>

      {branch.map((sd, i) => (
        <View key={i} style={styles.sciroccoDayCard} wrap={false}>
          <Text style={styles.sciroccoDayLabel}>ДЕНЬ {sd.day_ref}</Text>
          <Text style={styles.sciroccoDayTitle}>{sd.title}</Text>
          <Text style={[styles.activityItem, { color: C.sciroccoText }]}>📍 {sd.destination}</Text>
          <View style={styles.mooringBox}>
            <Text style={[styles.mooringName, { color: C.sciroccoText }]}>
              ⚓ {sd.mooring.name ?? sd.mooring.type}
            </Text>
            {sd.mooring.notes && (
              <Text style={styles.mooringNote}>{sd.mooring.notes}</Text>
            )}
          </View>
          {sd.activities.map((act, j) => (
            <Text key={j} style={[styles.activityItem, { color: C.sciroccoText }]}>· {act}</Text>
          ))}
          {sd.merges_to && (
            <Text style={[styles.activityItem, { color: C.sciroccoBorder, fontStyle: 'italic', marginTop: 4 }]}>
              ↩ {sd.merges_to}
            </Text>
          )}
        </View>
      ))}

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{routeTitle}</Text>
        <Text
          style={styles.footerText}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </View>
    </Page>
  );
}

// ── Root document ────────────────────────────────────────────

export function AmalfiRoutePDF({ route }: { route: Route }) {
  return (
    <Document title={route.title} author="Amalfi Route Guide" language="ru">
      {/* Cover page */}
      <Page size="A4" style={[styles.page, styles.coverPage]}>
        <Text style={styles.coverTitle}>{route.title}</Text>
        {route.subtitle && <Text style={styles.coverSubtitle}>{route.subtitle}</Text>}
        <View style={styles.coverMetaRow}>
          <View>
            <Text style={[styles.coverMetaItem, { marginBottom: 2 }]}>🚢 Яхта</Text>
            <Text style={[styles.coverMetaItem, styles.coverMetaValue]}>{route.boat.name}</Text>
            <Text style={styles.coverMetaItem}>
              {route.boat.length_m}м × {route.boat.beam_m}м · осадка {route.boat.draft_m}м
            </Text>
          </View>
          <View>
            <Text style={[styles.coverMetaItem, { marginBottom: 2 }]}>👥 Экипаж</Text>
            <Text style={[styles.coverMetaItem, styles.coverMetaValue]}>
              {route.crew.adults} взрослых + {route.crew.children} детей
            </Text>
            {route.crew.children_ages && (
              <Text style={styles.coverMetaItem}>Возраст: {route.crew.children_ages}</Text>
            )}
          </View>
          <View>
            <Text style={[styles.coverMetaItem, { marginBottom: 2 }]}>📅 Даты</Text>
            <Text style={[styles.coverMetaItem, styles.coverMetaValue]}>{route.dates}</Text>
          </View>
        </View>
        {route.rules.length > 0 && (
          <View style={styles.coverRules}>
            {route.rules.map((rule, i) => (
              <Text key={i} style={styles.coverRule}>📌 {rule}</Text>
            ))}
          </View>
        )}
      </Page>

      {/* Route overview / decision table */}
      <OverviewPage route={route} />

      {/* One page per day */}
      {route.days.map((day) => (
        <DayPage key={day.day} day={day} routeTitle={route.title} />
      ))}

      {/* Scirocco branch */}
      {route.scirocco_branch.length > 0 && (
        <SciroccoBranchPage branch={route.scirocco_branch} routeTitle={route.title} />
      )}
    </Document>
  );
}
        </View>
      )}

      {/* Anchoring */}
      {day.anchoring && <AnchoringBlock anchoring={day.anchoring} />}

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{routeTitle}</Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) =>
          `Day ${day.day}  ·  ${pageNumber} / ${totalPages}`
        } />
      </View>
    </Page>
  );
}

// ── Root document ────────────────────────────────────────────

export function AmalfiRoutePDF({ route }: { route: Route }) {
  const totalNm = route.days.reduce((acc, d) => acc + (d.distance_nm ?? 0), 0);

  return (
    <Document title={route.title} author="Amalfi Route Guide" language="en">
      {/* Cover page */}
      <Page size="A4" style={[styles.page, styles.coverPage]}>
        <Text style={styles.coverTitle}>{route.title}</Text>
        {route.description && (
          <Text style={styles.coverSubtitle}>{route.description}</Text>
        )}
        <Text style={styles.coverMeta}>
          {route.days.length} days · {totalNm} nm total
        </Text>
      </Page>

      {/* One page per day */}
      {route.days.map((day) => (
        <DayPage key={day.day} day={day} routeTitle={route.title} />
      ))}
    </Document>
  );
}
